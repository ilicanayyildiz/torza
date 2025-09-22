import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  id: string;
  title: string;
  description?: string | null;
  cover_url?: string | null;
};

export default function CollectionCard({ id, title, description, cover_url }: Props) {
  return (
    <Link href={`/collections/${id}`}>
      <Card className="overflow-hidden h-full">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-[3/1] bg-gray-100">
            {cover_url ? (
              <Image src={cover_url} alt={title} fill className="object-cover" />
            ) : null}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-base">{title}</CardTitle>
          {description ? <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p> : null}
        </CardContent>
      </Card>
    </Link>
  );
}
