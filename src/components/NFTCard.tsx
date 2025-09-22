import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils/currency';

type Props = {
  id: string;
  name: string;
  image_url?: string | null;
  price_eur: number;
};

export default function NFTCard({ id, name, image_url, price_eur }: Props) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-square bg-gray-100">
          {image_url ? (
            <Image src={image_url} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-base">{name}</CardTitle>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-semibold">{formatCurrency(price_eur)}</span>
        </div>
      </CardContent>
      <CardContent className="p-4 pt-0">
        <Link href={`/nft/${id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
