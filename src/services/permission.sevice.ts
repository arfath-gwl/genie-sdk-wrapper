import { Injectable } from "@angular/core";
import { GenieResponse } from "./service.bean";


export class PermissionResponse {
	[index: string]: any 
}


@Injectable()
export class PermissionService {

	hasPermission(permission: Array<String>, successCallback: (response) => void, errorCallback: (error) => void) {
 		(<any>window).GenieSDK.permission.hasPermission(JSON.stringify(permission), successCallback, errorCallback);
	}

	requestPermission(permission: Array<String>, successCallback: (response) => void, errorCallback: (error) => void) {
		(<any>window).GenieSDK.permission.requestPermission(JSON.stringify(permission), successCallback, errorCallback);
	}
}