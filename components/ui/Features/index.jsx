import SectionWrapper from "../../SectionWrapper"
import Image from 'next/image'

const Features = () => {

    const imageFeatures = [
        {
            // Ganti "foto1.jpg" dengan nama file Anda
            src: "/img_2.jpg", 
            alt: "Foto proyek 1",
        },
        {
            // Ganti "foto2.jpg" dengan nama file Anda
            src: "/img_4.jpg",
            alt: "Foto proyek 2",
        },
        {
            // Ganti "foto3.jpg" dengan nama file Anda
            src: "/img_6.jpg",
            alt: "Foto proyek 3",
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen">
                
                {/* Grid Responsif (lg: 3 kolom, sm: 2 kolom, seluler: 1 kolom) */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        imageFeatures.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                {/* Wrapper ini PENTING untuk membuat gambar seragam */}
                                <div className="relative h-64 w-full"> 
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        layout="fill"      // Mengisi div parent
                                        objectFit="cover" // Memotong gambar agar pas (tidak penyok)
                                        className="rounded-lg" 
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Features