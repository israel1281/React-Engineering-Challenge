import { memo, SVGProps } from 'react';

const AntDesignSearchOutlinedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='m24.872 23.365-7.101-7.1a8.13 8.13 0 0 0 1.698-5c0-2.192-.856-4.249-2.404-5.799a8.142 8.142 0 0 0-5.8-2.404c-2.19 0-4.251.856-5.799 2.404a8.138 8.138 0 0 0-2.404 5.8c0 2.19.856 4.252 2.404 5.8a8.138 8.138 0 0 0 5.8 2.403 8.136 8.136 0 0 0 4.995-1.696l7.102 7.099a.224.224 0 0 0 .317 0l1.192-1.19a.225.225 0 0 0 0-.317Zm-9.275-7.768a6.092 6.092 0 0 1-4.331 1.794 6.092 6.092 0 0 1-4.332-1.794 6.092 6.092 0 0 1-1.793-4.331c0-1.636.637-3.175 1.793-4.332a6.092 6.092 0 0 1 4.332-1.793c1.635 0 3.174.634 4.33 1.793a6.092 6.092 0 0 1 1.795 4.332 6.088 6.088 0 0 1-1.794 4.33Z'
      fill='#3A74CA'
      stroke='#3A74CA'
    />
  </svg>
);

const Memo = memo(AntDesignSearchOutlinedIcon);
export { Memo as AntDesignSearchOutlinedIcon };
