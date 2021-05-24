
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Registration } from './registration';
import { Login } from '../login-page/login'
import { ForgotPassword } from '../forgot-password/forgot-password';
import { ResetPassword } from '../reset-password/reset-password';
import { Answer } from '../answer';
import { UserProfile } from "../user-profile/userProfile";
import { Question } from "../ask-question/askQuestion"
import { Active } from '../user-profile/active';
import { updateUser } from '../update-profile/update-profile';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:8900/api/registrations';
  _loginUrl = 'http://localhost:8900/api/login';
  _checkUser = 'http://localhost:8900/api/check'
 _updateUrl:any
 questionUrl="http://localhost:8900/api/questions";


 activeUrl = 'http://localhost:8900/api/active-user'
//  updateProfileUrl = 'http://localhost:8900/api/userProfileUpdate/:email'

 

 answerUrl="http://localhost:8900/api/answer";

 
 profileUrl="http://localhost:8900/api/single";
  constructor(private _http: HttpClient) { }

  enroll(user: Registration) {
    return this._http.post<any>(this._url,user);
        
  }

  login(user: Login){
    return this._http.post<any>(this._loginUrl,user)
  }

  checkUser(user: ForgotPassword){
    return this._http.post<any>(this._checkUser,user)
  }

  getToken(){ 
    return localStorage.getItem('token');
  }
  update(user:ResetPassword,email:any,token:any){
   this. _updateUrl=`http://localhost:8900/api/reset-password/${email}/${token}`
   return this._http.post<any>(this._updateUrl,user)
  }
  getLink(user:ForgotPassword){
    let url='http://localhost:8900/api/forget-password'
    return this._http.post<any>(url,user)
  }

  getProfile(){
    return this._http.get<any>(this._url)
  }


  postAnswer(question:any,answer:Answer){
    answer.author=localStorage.getItem('email')
    let url=`http://localhost:8900/api/answer/${question}`
    return this._http.post(url,answer)
  }
  postQuestions(data:Question){ 

    //get email from local storage
   let userEmail =localStorage.getItem('email')



   data.email=userEmail;
    return this._http.post<any>(this.questionUrl,data);
  }
  getQuestions(){
    return this._http.get(this.questionUrl)
  }
  getQuetionDetails(question:any){
    return this._http.get(`${this.questionUrl}/${question}`)
  }
  getQuestionViews(question:any){
    let myUrl=`http://localhost:8900/api/views`
    return this._http.patch<any>(myUrl,question)
  }

  

  

  getProfileDetails(user:Active){
    let userEmail =localStorage.getItem('email')
     user.email=userEmail
     return this._http.post<any>(this.activeUrl,user)
  }
  getUserQuestion(){
    let userEmail =localStorage.getItem('email')
    return this._http.get(`http://localhost:8900/api/questionsOfUser/${userEmail}`)
  }
  //update user profile
  updateUserProfile(up:updateUser){
    let user = localStorage.getItem('email')
    console.log(up)
    return this._http.patch(`http://localhost:8900/api/userProfileUpdate/${user}`,up)
  }
  voteQuestion(question:any){
    return this._http.put(`${this.questionUrl}`,question)
  }

  voteAnswer(questionAnswerObj:any){
    return this._http.put(`${this.answerUrl}`,questionAnswerObj)
  }
  questionByTags(value:any){
    return this._http.get(`http://localhost:8900/api/questionByTagName/${value}`)

  }


}

