import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor() {
    this.jbtHeading = 'Lovchikov Blog';
    this.jbtText = 'Cred gentrify snackwave, listicle farm-to-table wayfarers vaporware direct trade semiotics lo-fi letterpress gluten-free. Hella irony post-ironic artisan vaporware, biodiesel sartorial four loko succulents portland VHS. Copper mug raw denim lumbersexual, aesthetic subway tile tofu paleo listicle iPhone hoodie truffaut etsy thundercats scenester. Hell of yuccie umami PBR&B, portland butcher tacos fanny pack ennui helvetica selfies pinterest enamel pin cronut salvia. Shoreditch iceland blue bottle, pok pok food truck direct trade fam pickled tacos typewriter small batch vaporware man braid single-origin coffee. Roof party occupy tote bag, keytar ennui pour-over man bun swag heirloom. Tote bag hella unicorn microdosing kogi.';
    this.jbtBtnText = 'know more';
    this.jbtBtnUrl = 'https://vk.com/lorn_music';
  }
}
