/**
 * GET /api/creators – List all creators (POC mock).
 */
import { NextResponse } from 'next/server';
import { CREATORS } from '@/lib/mock-data';

export async function GET() {
  try {
    return NextResponse.json(CREATORS);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch creators' }, { status: 500 });
  }
}
