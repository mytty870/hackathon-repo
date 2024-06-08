// pages/index.js
import {
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react'
import ServiceDescription from './servicedescription/servicedescription'

export default function Top() {
  const service = {
    AI面接練習: '/interview',
    ES添削: '/es-feedback',
    就活チャットボット: '/qa',
  }
  return (
    <div>
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">サービス</h2>
          <div className="flex flex-wrap justify-center">
            {Object.entries(service).map(([item, url]) => (
              <div key={item} className="w-full p-4 sm:w-1/2 md:w-1/4">
                <Card>
                  <CardHeader className="p-0">
                    <Image
                      src={`${url}.png`}
                      alt={`${item}`}
                      className="h-36 w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <p className="text-xl">{item}</p>
                  </CardBody>
                  <CardFooter className="flex justify-center">
                    <Link href={url} className="items-center">
                      <Button className="bg-blue-400 text-white">始める</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceDescription />
    </div>
  )
}
