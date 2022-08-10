/* eslint-disable @typescript-eslint/no-explicit-any */
import {Injectable} from '@angular/core'

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '')
    } catch (err: any) {
      console.error(err.messages)
      return null
    }
  }
}
