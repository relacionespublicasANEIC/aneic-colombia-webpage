export const prerender = false;
export async function GET({ params }) {
    const PARAMETERS = new URLSearchParams({
        key: import.meta.env.CALENDAR_API_KEY,
        alt: "media"
    });
    let res = await fetch(`https://www.googleapis.com/drive/v3/files/${params.id}?${PARAMETERS}`);
    return new Response(await res.blob());
}