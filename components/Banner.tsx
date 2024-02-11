import Image from "next/image";

export default function MainPageBanner () {
    return (
        <div className="flex w-full">
            <Image
                src="/banner.jpg"
                className="w-full h-auto"
                alt="Our top doctor"
                width={3840}
                height={1692}
            />
        </div>
    )
}
