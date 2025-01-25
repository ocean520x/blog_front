import auth from './auth';
import front from './front';
import person from './person';
import admin from '@/router/admin';
import error from '@/router/error';

export default [front, person, auth, ...admin, error];
