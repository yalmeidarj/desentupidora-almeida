import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const imagePath = path.join(process.cwd(), 'public', 'logo-desentupidora-light.png');
        const image = fs.readFileSync(imagePath);

        return new NextResponse(image, {
            headers: {
                'Content-Type': 'logo-desentupidora-light.png',
        },
    });
} catch (error) {
    console.error('Error serving image:', error);
    return new NextResponse('Image not found', { status: 404 });
}
}