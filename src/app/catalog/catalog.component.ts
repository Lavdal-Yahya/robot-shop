import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: String = '';
  // private cartSvc: CartService = inject(CartService);

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => { this.products = products});
    // this.filter = this.route.snapshot.params['filter'];
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts() {
    return this.filter === ''
    ? this.products
    :this.products.filter((product: any) => product.category === this.filter);
  }
  getDiscountedClasses(product: IProduct) {
    if(product.discount > 0) {
      return "strikethrough";
    } else {
      return [];
    }
  }
  
}
