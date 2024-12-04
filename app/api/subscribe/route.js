import { NextResponse } from "next/server";
const API_KEY = process.env.CONVERTKIT_API_KEY;
const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const BASE_URL = 'https://api.convertkit.com/v3';

export async function POST(request) {
    const { email } = await request.json()

    // Verify request body
    if(!email) {
        return NextResponse.json({
            message: 'Proporciona un email válido.',
            status: 400
        }, {
            status: 400
        })
    }

    try {
        const url = [BASE_URL, `forms`, FORM_ID, `subscribe`].join('/')
        const data = {
            api_key: API_KEY,
            email: email
        }

        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json; charset=utf-8'},
            method: 'POST'
        });

        return NextResponse.json({
            message: 'Gracias por suscribirte! Revisa tu bandeja de entrada.',
            status: 200
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: '¡¡Oops!! Algo salió mal. Por favor intenta de nuevo.',
            status: 500
        }, {
            status: 500
        })
    }
}