import { firestore } from 'firebase-admin';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';
import { NextRequest, NextResponse } from 'next/server';

initFirebaseAdminSDK();

export async function GET(req: NextRequest) {
  console.log('[api/feeds GET] Fetching feeds from Firestore...');
  const fsdb = firestore();

  try {
    const snapshot = await fsdb.collection('feeds').get();
    const feeds = snapshot.docs.map((doc) => doc.data());
    console.log('[api/feeds GET] Fetched feeds count:', feeds.length);
    return NextResponse.json(feeds);
  } catch (error: any) {
    console.error('[api/feeds GET] Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
