const callouts = [
    {
        name: '#beach, #summer, #crops, #shorts',
        description: 'Summer Vibes ☀️🍹',
        imageSrc: require('./assets/img/azul.gif'),
        imageAlt: 'Summer Vibes ☀️🍹',
        href: '#',
    },
    {
        name: '#joggers, #hoodies, #pijamas, #remeras ',
        description: 'Home Office 💻🏠',
        imageSrc: require('./assets/img/home.gif'),
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: '#bohemia, #dress, #camisas',
        description: '⭐ Rare beauty',
        imageSrc: require('./assets/img/rare.png'),
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: '#estampados, #jeans, #vestidos, #camisas',
        description: 'The Bitch is Back ⚜️',
        imageSrc: require('./assets/img/the_bitch_is_back.gif'),
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: '#jeans, #vestidos, #camisas, #cardigan,',
        description: 'Love in the air 🍽❤️‍🔥',
        imageSrc: require('./assets/img/cita.webp'),
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: '#jeans, #shorts, #dress, #shirts',
        description: "who's that Girl",
        imageSrc: require('./assets/img/who.webp'),
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: '#dress',
        description: 'Lady Million 🪙👛 ',
        imageSrc: require('./assets/img/elegant.webp'),
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: '#bikini, #top',
        description: 'Hot confidence ⛱️🔞',
        imageSrc: require('./assets/img/sexy.webp'),
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: '#XXXXL, #XXXL, #XXL, #XL #L, #M, #S, ',
        description: 'Body Positive 💌🧁',
        imageSrc: require('./assets/img/fat.webp'),
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

export default function Inicio() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Colecciones 2023</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative" style={{marginTop: `20px`,
                                marginBottom: `20px`}}>
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}