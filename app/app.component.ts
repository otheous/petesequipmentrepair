import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Pete's Equipment Repair</h1>
		<img src='images/petes_flyer1.png'>
		<div>
			<h3>Contact Us</h3>
			<span>
				Tim Peterson<br>
				903-920-5910<br>
				<a href="mailto:petesequipment@yahoo.com">petesequipment@yahoo.com</a>
			</span>
		</div>
    `
})
export class AppComponent { }
