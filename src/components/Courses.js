import React from 'react';
import {
  BrowserRouter, Route, Redirect
} from 'react-router-dom';

import CourseContainer from './courses/courseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><a href={`${match.url}/html`}>HTML</a></li>
        <li><a href={`${match.url}/css`}>CSS</a></li>
        <li><a href={`${match.url}/javascript`}>JavaScript</a></li>
      </ul>
    </div>
    <BrowserRouter>
    <div>
   
    <Route exact path={match.path} render={()=>  <Redirect to={`${match.path}/html`}/>}/>
    <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses}/>}/>
    <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses}/>}/>
    <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses}/>}/>
    </div>
    </BrowserRouter>
    {/* Write routes here... */}

  </div>
);

export default Courses;