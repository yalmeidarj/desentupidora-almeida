import './globals.css';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" >
            <meta name="msvalidate.01" content="5784387DCB5C94A28C30FA5A46AA96C5" />
            <body className="min-h-screen">{children}</body>
        </html>
    );
}