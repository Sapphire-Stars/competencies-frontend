// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Profile } from "./models/profile";

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {


//   constructor(private http:HttpClient) { }
  
//   getProfiles(email:any){
//     return this.http.get<any>(`http://localhost:8900/api/getProfile/${email}`);
//   }

//   addProfile(email: string, image: File): void {
//     const profileData = new FormData();
//     profileData.append("email", email);
//     profileData.append("image", image);
//     this.http.post<{ profile: Profile }>(`http://localhost:8900/api/postProfile/${email}`, profileData)
//       .subscribe((profileData) => {
//         const profile: Profile = {
//           email: email,
//           imagePath: profileData.profile.imagePath,
//         };
//       });
//   }
// }
