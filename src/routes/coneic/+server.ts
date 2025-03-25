export function GET() {
    return new Response(null, {
        status: 308,
        headers: {
            Location: "https://coneic.aneiccolombia.com"
        }
    })
}
