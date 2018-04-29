/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */


/** 
 * Campus Components
 */
export {default as CampusById}  from './campus/campus-by-id';
export {default as CampusList}  from './campus/campus-list';
export {default as CampusThumb} from './campus/campus-thumb';

/**
 * Student Components
 */
export {default as NewStudentForm} from './student/new-student-form';
export {default as StudentList}    from './student/student-list';
export {default as StudentThumb}   from './student/student-thumb';

/**
 * Other Components
 */
export {default as Home}   from './home';
export {default as Navbar} from './navbar';