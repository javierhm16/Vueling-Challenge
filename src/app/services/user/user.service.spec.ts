//crear test de user.service.ts

import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('UserService', () => {
    let service: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });
        service = TestBed.inject(UserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should save the security key in localStorage', () => {
        service.saveSecurityKey('1234567890');
        expect(localStorage.getItem('securityKey')).toEqual('1234567890');
    });

    it('should save the username in localStorage', () => {
        service.saveUsername('test');
        expect(localStorage.getItem('username')).toEqual('test');
    });

    it('should remove the security key from localStorage', () => {
        service.logout();
        expect(localStorage.removeItem('securityKey')).toBeUndefined();
    });

});