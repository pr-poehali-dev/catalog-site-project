import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
}

const mockProducts: Product[] = [
  { id: 1, name: 'Кроссовки Air Max', category: 'Обувь', price: 129, image: '👟', rating: 4.8, inStock: true },
  { id: 2, name: 'Ботинки Chelsea', category: 'Обувь', price: 189, image: '👢', rating: 4.6, inStock: true },
  { id: 3, name: 'Туфли классические', category: 'Обувь', price: 149, image: '👞', rating: 4.7, inStock: true },
  { id: 4, name: 'Сандалии летние', category: 'Обувь', price: 79, image: '👡', rating: 4.5, inStock: true },
  
  { id: 5, name: 'Рюкзак Urban', category: 'Сумки', price: 89, image: '🎒', rating: 4.5, inStock: true },
  { id: 6, name: 'Кожаная сумка', category: 'Сумки', price: 199, image: '👜', rating: 4.8, inStock: true },
  { id: 7, name: 'Дорожная сумка', category: 'Сумки', price: 149, image: '👝', rating: 4.6, inStock: false },
  { id: 8, name: 'Клатч вечерний', category: 'Сумки', price: 69, image: '💼', rating: 4.4, inStock: true },
  
  { id: 9, name: 'Кепка спортивная', category: 'Аксессуары на голову', price: 39, image: '🧢', rating: 4.3, inStock: true },
  { id: 10, name: 'Шляпа федора', category: 'Аксессуары на голову', price: 79, image: '🎩', rating: 4.7, inStock: true },
  { id: 11, name: 'Бейсболка vintage', category: 'Аксессуары на голову', price: 49, image: '🧢', rating: 4.5, inStock: true },
  { id: 12, name: 'Повязка на голову', category: 'Аксессуары на голову', price: 29, image: '👑', rating: 4.2, inStock: true },
  
  { id: 13, name: 'Серебряное ожерелье', category: 'Ожерелья/браслеты', price: 159, image: '📿', rating: 4.9, inStock: true },
  { id: 14, name: 'Браслет из бисера', category: 'Ожерелья/браслеты', price: 45, image: '💍', rating: 4.4, inStock: true },
  { id: 15, name: 'Золотая цепочка', category: 'Ожерелья/браслеты', price: 299, image: '📿', rating: 4.8, inStock: false },
  { id: 16, name: 'Браслет кожаный', category: 'Ожерелья/браслеты', price: 59, image: '⌚', rating: 4.6, inStock: true },
  
  { id: 17, name: 'Хвост лисы', category: 'Хвосты/Крылья', price: 129, image: '🦊', rating: 4.7, inStock: true },
  { id: 18, name: 'Крылья ангела', category: 'Хвосты/Крылья', price: 249, image: '👼', rating: 4.9, inStock: true },
  { id: 19, name: 'Хвост дракона', category: 'Хвосты/Крылья', price: 179, image: '🐉', rating: 4.8, inStock: false },
  { id: 20, name: 'Крылья феи', category: 'Хвосты/Крылья', price: 199, image: '🧚', rating: 4.6, inStock: true },
  
  { id: 21, name: 'Подставка для книг', category: 'Подставки', price: 49, image: '📚', rating: 4.5, inStock: true },
  { id: 22, name: 'Подставка для телефона', category: 'Подставки', price: 29, image: '📱', rating: 4.4, inStock: true },
  { id: 23, name: 'Подставка для ноутбука', category: 'Подставки', price: 89, image: '💻', rating: 4.7, inStock: true },
  { id: 24, name: 'Подставка декоративная', category: 'Подставки', price: 39, image: '🎨', rating: 4.3, inStock: true },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Обувь', 'Сумки', 'Аксессуары на голову', 'Ожерелья/браслеты', 'Хвосты/Крылья', 'Подставки'];

  const filteredProducts = mockProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            Каталог будущего
          </h1>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Откройте для себя товары нового поколения
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={20} className="text-primary" />
                Фильтры
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Найти товар..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Категория</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : 'hover:border-primary'}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Цена: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                </div>

                <Button
                  variant="outline"
                  className="w-full hover:border-destructive hover:text-destructive"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 1000]);
                    setSortBy('featured');
                  }}
                >
                  <Icon name="X" size={16} className="mr-2" />
                  Сбросить
                </Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-muted-foreground">
                Найдено товаров: <span className="text-foreground font-semibold">{filteredProducts.length}</span>
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-muted/50 border-border/50">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Популярные</SelectItem>
                  <SelectItem value="price-low">Цена: низкая</SelectItem>
                  <SelectItem value="price-high">Цена: высокая</SelectItem>
                  <SelectItem value="rating">Рейтинг</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group glass-card gradient-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                      {!product.inStock && (
                        <Badge variant="destructive" className="text-xs">
                          Нет в наличии
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="fill-accent text-accent" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pt-2 border-t border-border/50">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 glass-card rounded-2xl animate-fade-in">
                <Icon name="PackageOpen" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;