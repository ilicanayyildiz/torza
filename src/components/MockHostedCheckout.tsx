'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DemoBanner from '@/components/DemoBanner';
import { formatCurrency } from '@/lib/utils/currency';

type Props = {
  sessionId: string;
  order: {
    id: string;
    nft: {
      name: string;
      image_url?: string | null;
    };
    unit_price_eur: number;
    quantity: number;
  };
};

export default function MockHostedCheckout({ sessionId, order }: Props) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/mock/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session: sessionId }),
      });
      
      if (response.ok) {
        window.location.href = `/checkout/return?order=${order.id}&status=success`;
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    window.location.href = `/checkout/return?order=${order.id}&status=cancel`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <DemoBanner />
      <div className="max-w-md mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Complete Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded p-3">
              <h3 className="font-medium">{order.nft.name}</h3>
              <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-lg font-semibold">{formatCurrency(order.unit_price_eur * order.quantity)}</p>
            </div>
            
            <div className="space-y-3">
              <Input placeholder="Card Number" defaultValue="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="MM/YY" defaultValue="12/25" />
                <Input placeholder="CVC" defaultValue="123" />
              </div>
              <Input placeholder="Name on Card" defaultValue="John Doe" />
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handlePay} disabled={loading} className="flex-1">
                {loading ? 'Processing...' : 'Pay Now'}
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
