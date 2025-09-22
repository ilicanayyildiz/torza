// Mock payment provider for demo only
export interface CreateSessionParams {
  orderId: string;
  amountEur: number;
  successUrl: string;
  cancelUrl: string;
}

export interface CreateSessionResponse {
  id: string;
  url: string;
}

export function createSession({ orderId, amountEur, successUrl, cancelUrl }: CreateSessionParams): CreateSessionResponse {
  const sessionId = `mock_sess_${Math.random().toString(36).slice(2, 10)}`;
  const hostedUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/mock/hosted?session=${sessionId}`;
  
  return {
    id: sessionId,
    url: hostedUrl,
  };
}

export function verifyWebhook(signature: string, body: string): boolean {
  // Demo only: simple string comparison
  return signature === process.env.MOCK_WEBHOOK_SECRET;
}

export async function simulateWebhookCall(sessionId: string): Promise<void> {
  const webhookUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhook`;
  const payload = {
    type: 'payment.succeeded',
    data: {
      provider_session_id: sessionId,
      provider_payment_id: `mock_pay_${Math.random().toString(36).slice(2, 10)}`,
    },
  };
  
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-torza-signature': process.env.MOCK_WEBHOOK_SECRET!,
    },
    body: JSON.stringify(payload),
  });
  
  if (!response.ok) {
    throw new Error('Webhook simulation failed');
  }
}
