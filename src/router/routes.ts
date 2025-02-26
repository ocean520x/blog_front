// import person from './person';
import admin from '@/router/admin'
import auth from './auth'
import front from './front'
// import error from '@/router/error';
// import member from '@/router/member';

export default [front, auth, ...admin]
// export default [front, person, member, auth, ...admin, error];
