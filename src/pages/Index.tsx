import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient">Сингапур 🇸🇬</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'История', 'Города', 'Кухня', 'Культура', 'Праздники', 'Мечта'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="главная" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
              Сингапур
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Город будущего между Востоком и Западом
            </p>
            <Button size="lg" onClick={() => scrollToSection('история')} className="hover-lift">
              Начать путешествие <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="медиа" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Галерея</h3>
          <Tabs defaultValue="фото" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="фото">Фото</TabsTrigger>
              <TabsTrigger value="видео">Видео</TabsTrigger>
              <TabsTrigger value="аудио">Аудио</TabsTrigger>
            </TabsList>
            <TabsContent value="фото" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Marina Bay Sands', desc: 'Символ современного Сингапура', img: 'https://cdn.poehali.dev/projects/2d0355f4-c401-4ead-89a6-6da2835d1d3e/files/fb9d34c8-86f1-42e6-bdc1-54d408efb6b4.jpg' },
                  { title: 'Gardens by the Bay', desc: 'Футуристические сады', img: 'https://cdn.poehali.dev/projects/2d0355f4-c401-4ead-89a6-6da2835d1d3e/files/928a703e-f6ed-4ddf-b598-5196f7f35045.jpg' },
                  { title: 'Chinatown', desc: 'Исторический квартал', img: 'https://cdn.poehali.dev/projects/2d0355f4-c401-4ead-89a6-6da2835d1d3e/files/c40e6397-549d-410b-b315-d82f134ade60.jpg' }
                ].map((item, i) => (
                  <Card key={i} className="hover-lift overflow-hidden group cursor-pointer">
                    <div className="h-48 overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="видео" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Тур по Сингапуру', videoId: 'Jc_P5levqnM', duration: '15 мин' },
                  { title: 'Достопримечательности', videoId: '1gKX9TWRyfs', duration: '10 мин' }
                ].map((item, i) => (
                  <Card key={i} className="hover-lift overflow-hidden group">
                    <div className="relative h-56 overflow-hidden">
                      <iframe 
                        className="w-full h-full" 
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      <Badge variant="secondary">{item.duration}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="аудио" className="mt-8">
              <div className="space-y-4">
                {[
                  { title: 'Звуки улиц Сингапура', url: 'https://www.youtube.com/watch?v=abcdefghijk', duration: '8 мин' },
                  { title: 'Традиционная музыка', url: 'https://www.youtube.com/watch?v=lmnopqrstuv', duration: '12 мин' }
                ].map((item, i) => (
                  <Card key={i} className="hover-lift">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                        <Icon name="Music" size={32} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.duration}</p>
                      </div>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="outline">
                          <Icon name="ExternalLink" size={20} />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="ссылки" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Полезные ссылки</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Визы и Посольство</h4>
                    <a href="https://www.mfa.gov.sg/moscow" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Посольство Сингапура <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Отзывы туристов</h4>
                    <div className="space-y-1">
                      <a href="https://www.tripadvisor.ru/Tourism-g294265-Singapore-Vacations.html" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        TripAdvisor <Icon name="ExternalLink" size={14} />
                      </a>
                      <a href="https://www.otzyv.ru/singapore" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Otzyv.ru <Icon name="ExternalLink" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Туристические агентства</h4>
                    <div className="space-y-1">
                      <a href="https://www.coral.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Coral Travel <Icon name="ExternalLink" size={14} />
                      </a>
                      <a href="https://www.tez-tour.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Tez Tour <Icon name="ExternalLink" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Hotel" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Бронирование отелей</h4>
                    <div className="space-y-1">
                      <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Booking.com <Icon name="ExternalLink" size={14} />
                      </a>
                      <a href="https://www.agoda.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Agoda <Icon name="ExternalLink" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Plane" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Авиабилеты</h4>
                    <a href="https://www.aviasales.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Aviasales - поиск авиабилетов <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="история" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-gradient">История Сингапура</h3>
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    <strong className="text-primary">Сингапур</strong> — островное город-государство в Юго-Восточной Азии, отделённое от южной оконечности Малаккского полуострова узким Джохорским проливом.
                  </p>
                  <p>
                    Основанный в 1819 году Стамфордом Раффлзом как торговый пост Британской Ост-Индской компании, Сингапур был одной из самых важных коммерческих и военных баз Британской империи.
                  </p>
                  <p>
                    После обретения независимости в 1965 году, Сингапур за несколько десятилетий превратился из развивающейся страны в высокоразвитое государство, став одним из «азиатских тигров».
                  </p>
                  <p>
                    Сегодня Сингапур — <strong className="text-secondary">глобальный финансовый центр</strong>, один из самых важных портов в мире и пример удивительного экономического чуда, совершённого всего за полвека.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="города" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Города для посещения</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                city: 'Центральный район',
                description: 'Сердце Сингапура с небоскрёбами, музеями и торговыми центрами.',
                attractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Esplanade', 'Singapore Flyer'],
                icon: 'Building2'
              },
              {
                city: 'Чайнатаун',
                description: 'Исторический китайский квартал с храмами, рынками и аутентичной кухней.',
                attractions: ['Buddha Tooth Relic Temple', 'Chinatown Heritage Centre', 'Maxwell Food Centre', 'Ann Siang Hill'],
                icon: 'Landmark'
              },
              {
                city: 'Сентоза',
                description: 'Курортный остров с пляжами, парками развлечений и аттракционами.',
                attractions: ['Universal Studios', 'S.E.A. Aquarium', 'Пляж Siloso', 'Fort Siloso'],
                icon: 'Palmtree'
              }
            ].map((item, i) => (
              <Card key={i} className="hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{item.city}</h4>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Достопримечательности:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.attractions.map((attr, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {attr}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="кухня" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Кухня Сингапура</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Icon name="UtensilsCrossed" size={40} className="text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-3">О кухне</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Сингапурская кухня — уникальное сочетание китайских, малайских, индийских и европейских кулинарных традиций. Хокер-центры (уличные рынки еды) — визитная карточка города, где можно попробовать аутентичные блюда по доступным ценам.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Icon name="ChefHat" size={40} className="text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">Популярные блюда</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Hainanese Chicken Rice', desc: 'Рис с курицей по-хайнаньски' },
                      { name: 'Laksa', desc: 'Острый кокосовый суп с лапшой' },
                      { name: 'Chili Crab', desc: 'Краб в остром томатном соусе' },
                      { name: 'Satay', desc: 'Шашлычки с арахисовым соусом' }
                    ].map((dish, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-secondary mt-1" />
                        <div>
                          <p className="font-semibold">{dish.name}</p>
                          <p className="text-sm text-muted-foreground">{dish.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="культура" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Музыка и Кинематограф</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Music" size={32} className="text-secondary" />
                    <h4 className="text-xl font-bold">Музыка</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Музыкальная сцена Сингапура отражает его мультикультурность: от традиционной китайской оперы и малайской музыки до современного поп-рока и электронной музыки.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Популярные артисты:</strong> JJ Lin, Stefanie Sun, Dick Lee</p>
                    <p className="text-sm"><strong>Фестивали:</strong> Singapore Jazz Festival, ZoukOut</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Film" size={32} className="text-primary" />
                    <h4 className="text-xl font-bold">Кинематограф</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Сингапурское кино набирает популярность в Азии. Местные режиссёры создают как коммерческие блокбастеры, так и артхаусные фильмы, исследующие мультикультурную идентичность города.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Известные фильмы:</strong> «Crazy Rich Asians», «Ilo Ilo»</p>
                    <p className="text-sm"><strong>Режиссёры:</strong> Jack Neo, Anthony Chen, Eric Khoo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="праздники" className="py-20 bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Главные праздники</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Китайский Новый год',
                date: 'Январь-Февраль',
                description: 'Самый важный праздник года с яркими парадами, фейерверками и традиционными танцами львов.',
                icon: 'Sparkles'
              },
              {
                name: 'Весак',
                date: 'Май',
                description: 'Буддийский праздник, отмечающий рождение, просветление и уход Будды. Храмы украшаются огнями.',
                icon: 'Flower'
              },
              {
                name: 'Хари Райа Пуаса',
                date: 'По исламскому календарю',
                description: 'Мусульманский праздник окончания Рамадана. Семьи собираются вместе, готовят праздничные блюда.',
                icon: 'Moon'
              },
              {
                name: 'День независимости',
                date: '9 августа',
                description: 'Национальный праздник с грандиозным парадом, авиашоу и фейерверками над Marina Bay.',
                icon: 'Flag'
              },
              {
                name: 'Дивали',
                date: 'Октябрь-Ноябрь',
                description: 'Индийский фестиваль огней. Район Little India превращается в море световых украшений.',
                icon: 'Flame'
              },
              {
                name: 'Рождество',
                date: '25 декабря',
                description: 'Orchard Road превращается в сказку с потрясающими световыми инсталляциями и рождественскими базарами.',
                icon: 'Gift'
              }
            ].map((holiday, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={holiday.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{holiday.name}</h4>
                      <Badge variant="outline" className="mb-2">{holiday.date}</Badge>
                      <p className="text-sm text-muted-foreground">{holiday.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="мечта" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Heart" size={64} className="text-accent mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-8 text-gradient">Почему Сингапур — моя мечта?</h3>
            <Card className="hover-lift">
              <CardContent className="p-8 text-left">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Сингапур для меня — это <strong className="text-primary">идеальное сочетание традиций и инноваций</strong>. Здесь древние храмы соседствуют с футуристическими небоскрёбами, а уличная еда признана на мировом уровне.
                  </p>
                  <p>
                    Меня восхищает, как эта маленькая страна смогла стать <strong className="text-secondary">глобальным центром технологий, финансов и культуры</strong>. Сингапур доказал, что размер не имеет значения, когда есть видение и упорство.
                  </p>
                  <p>
                    <strong className="text-accent">Безопасность, чистота, эффективность и мультикультурность</strong> — всё это делает Сингапур местом, где хочется жить, учиться и развиваться. Это город возможностей, где каждый может найти своё место.
                  </p>
                  <p className="text-center pt-4 text-muted-foreground italic">
                    Для меня Сингапур — это не просто город, это вдохновение и пример того, каким может быть будущее.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto hover-lift">
            <CardContent className="p-8 text-center">
              <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">О разработчике</h4>
              <p className="text-lg mb-2">
                <strong>Захар Куратов</strong>
              </p>
              <p className="text-muted-foreground">
                Студент Хакасского государственного университета
              </p>
              <Badge variant="secondary" className="mt-3">Группа 225</Badge>
            </CardContent>
          </Card>
          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">© 2024 Путеводитель по Сингапуру</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;