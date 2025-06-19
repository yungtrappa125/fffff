
class Furniture { 
    protected name: string; 
    protected dimensions: string; 
    protected price: number; 
 
    constructor(name: string, dimensions: string, price: number) { 
        this.name = name; 
        this.dimensions = dimensions; 
        this.price = price; 
    } 
 
    public displayInfo(): void { 
        console.log(`Название: ${this.name}`); 
        console.log(`Габариты: ${this.dimensions}`); 
        console.log(`Цена: ${this.price}`); 
    } 
} 
 
class Chair extends Furniture { 
    private legsCount: number; 
    private legHeight: number; 
    private hasBack: boolean; 
 
    constructor(name: string, dimensions: string, price: number, legsCount: number, legHeight: number, hasBack: boolean) { 
        super(name, dimensions, price); 
        this.legsCount = legsCount; 
        this.legHeight = legHeight; 
        this.hasBack = hasBack; 
    } 
 
    public displayInfo(): void { 
        super.displayInfo(); 
        console.log(`Число ножек: ${this.legsCount}`); 
        console.log(`Высота ножек: ${this.legHeight} см`); 
        console.log(`Наличие спинки: ${this.hasBack ? 'Да' : 'Нет'}`); 
    } 
} 
 
class Wardrobe extends Furniture { 
    private Material: string; 
    private doorsCount: number; 
    private compartmentsCount: number; 
 
    constructor(name: string, dimensions: string, price: number, Material: string, doorsCount: number, compartmentsCount: number) { 
        super(name, dimensions, price); 
        this.Material = Material; 
        this.doorsCount = doorsCount; 
        this.compartmentsCount = compartmentsCount; 
    } 
 
    public displayInfo(): void { 
        super.displayInfo(); 
        console.log(`Материал ручек: ${this.Material}`); 
        console.log(`Число створок: ${this.doorsCount}`); 
        console.log(`Число шкафчиков: ${this.compartmentsCount}`); 
    } 
} 
 
class Shelf extends Furniture { 
    private segmentsCount: number; 
    private segmentSize: string; 
 
    constructor(name: string, dimensions: string, price: number, segmentsCount: number, segmentSize: string) { 
        super(name, dimensions, price); 
        this.segmentsCount = segmentsCount; 
        this.segmentSize = segmentSize; 
    } 
 
    public displayInfo(): void { 
        super.displayInfo(); 
        console.log(`Число сегментов: ${this.segmentsCount}`); 
        console.log(`Размер каждого сегмента: ${this.segmentSize}`); 
    } 
} 
 
class Table extends Furniture { 
    private legsCount: number; 
    private tableArea: number; 
 
    constructor(name: string, dimensions: string, price: number, legsCount: number, tableArea: number) { 
        super(name, dimensions, price); 
        this.legsCount = legsCount; 
        this.tableArea = tableArea; 
    } 
 
    public displayInfo(): void { 
        super.displayInfo(); 
        console.log(`Число ножек: ${this.legsCount}`); 
        console.log(`Площадь столешницы: ${this.tableArea} кв. см`); 
    } 
} 
 
 
const chair = new Chair('Кресло', '80x80x100 см', 150, 4, 45, true); 
const wardrobe = new Wardrobe('Шкаф', '200x60x240 см', 500, 'Дерево', 2, 4); 
const shelf = new Shelf('Полка', '120x20x30 см', 50, 3, '40x20 см'); 
const table = new Table('Стол', '160x80x75 см', 300, 4, 12800); 
 
chair.displayInfo(); 
wardrobe.displayInfo(); 
shelf.displayInfo(); 
table.displayInfo();
