import 'react';

declare module 'react' {
  interface CSSProperties {
    '--index'?: number | string;
  }
}
