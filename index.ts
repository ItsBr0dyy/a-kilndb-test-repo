Bun.serve({
    hostname: "0.0.0.0",
    port: Number(process.env.PORT ?? 5000),
    fetch() {
        return Response.json({ message: "ok" });
    },
});

console.log(`listening on :${process.env.PORT ?? 5000}`);
