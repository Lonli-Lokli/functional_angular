import { HttpErrorResponse } from '@angular/common/http';
import { Either, right, left } from '@sweet-monads/either';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface ServerError {
  message: string;
  error?: Error;
}

export function eitherify<T>(
  ): (source: Observable<T>) => Observable<Either<ServerError, T>> {
    const messageByStatus = (err: HttpErrorResponse): string => err.error?.error ?? 'Cannot load data.';
  
    return (source: Observable<T>) =>
      source.pipe(
        map(r => right<ServerError, T>(r)),
        catchError(err =>
          of(
            left<ServerError, T>({
              message: err instanceof HttpErrorResponse ? messageByStatus(err) : 'Cannot load data.',
              error: err
            })
          )
        )
      );
  }