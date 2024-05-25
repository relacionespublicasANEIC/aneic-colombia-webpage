// https://developers.google.com/calendar/api/v3/reference/events
// https://developers.google.com/calendar/api/v3/reference/events/list
export const prerender = false;

async function getEventsGoogleCalendar() {
    const PARAMETERS = new URLSearchParams({
        key: import.meta.env.CALENDAR_API_KEY,
        timeMin: new Date().toISOString(),
        maxResults: 4,
        singleEvents: true,
        orderBy: "startTime",
        eventTypes: "default"
    });

    let res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${import.meta.env.CALENDAR_ID}/events?${PARAMETERS}`);
    return await res.json();
}

export async function GET({ params, request }) {
    let rawEvents = await getEventsGoogleCalendar();
    let events = rawEvents.items.map((event) => {
        return {
            eid: new URL(event.htmlLink).searchParams.get("eid"),
            title: event.summary,
            description: event?.description,
            start: event.start.dateTime,
            end: event.end.dateTime,
            meeting: event?.hangoutLink,
            cover: event?.attachments?.[0].fileId
        };
    });
    return new Response(JSON.stringify(events));
    // return new Response(JSON.stringify(rawEvents));
}