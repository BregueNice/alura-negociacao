export abstract class View<T> {

    protected elemento: HTMLElement;
    
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor) as HTMLElement;
    }

    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}