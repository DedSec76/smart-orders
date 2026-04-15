let orders: any[] = []

export async function POST(req: Request) {
    const data = await req.json()

    orders.push({
        id: Date.now(),
        ...data
    })

    return Response.json({ message: "ok" })
}

export async function GET() {
    return Response.json(orders)
}
    
