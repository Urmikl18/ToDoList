import { Headers } from '@angular/http';

export const apiUrl = 'https://todoornottodo.cloudno.de/';
export const authUrl = 'https://mighty-brushlands-14308.herokuapp.com/login'

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
