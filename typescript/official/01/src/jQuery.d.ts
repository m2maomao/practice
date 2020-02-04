/* declare var */
// declare const jQuery: (selector: string) => any;

/* declare function */
// declare function jQuery(selector: string): any;
// declare function jQuery(domReadyCallback:() => any): any;

/* declare namespace */
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
//   const version: number;
//   class Event {
//     blur(eventType: EventType): void;
//   }
//   enum EventType {
//     CustomClick
//   }
//   namespace fn {
//     function extend(object: any): void;
//   }
// }

// declare namespace jQuery.fn {
//   function extend(object: any): void;
// }

/* interface 和 type */
// interface AjaxSettings {
//   method?: 'GET' | 'POST'
//   data?: any
// }

// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
// }

/* 防止命名冲突 */
// declare namespace jQuery {
//   interface AjaxSettings {
//     method?: 'GET' | 'POST'
//     data?: any
//   }
//   function ajax(url:string, settings?:AjaxSettings): void;
// }

/* 声明合并 */
declare function jQuery(selector:string): any;
declare namespace jQuery {
  function ajax(url: string, settings?:any): void;
}