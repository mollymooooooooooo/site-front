import Card from '../../components/advantage_card/adv_card';
import './advantages.css';

const Advantages = () => {
    const advantagesData = [
        {
            title: "Широкий ассортимент",
            description: "Большой выбор техники и аксессуаров",
            icon: "cart"
        },
        {
            title: "Быстрая доставка",
            description: "По Москве — 2-3 часа;\nПо России — 2-4 дня",
            icon: "delivery"
        },
        {
            title: "Специальное предложение",
            description: "Только для клиентов нашего сайта",
            icon: "special"
        },
        {
            title: "Гарантия производителя",
            description: "Гарантия 2 года\nна устройства и аксессуары",
            icon: "guarantee"
        },
        {
            title: "Безопасная оплата",
            description: "Оплата после получения товара",
            icon: "payment"
        },
        {
            title: "Бесплатная консультация",
            description: "В любом удобном для вас\nформате, 7 дней в неделю",
            icon: "consultation"
        }
    ];

    return (
        <section className="advantages">
            <div className="container">
                <div className='advantage_content'>
                <h2 className="advantages__title">Почему выбирают нас</h2>
                <div className="advantages__grid">
                    {advantagesData.map((advantage, index) => (
                        <Card 
                            key={index}
                            title={advantage.title}
                            description={advantage.description}
                            icon={advantage.icon}
                        />
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;