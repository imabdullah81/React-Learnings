import { useState, useDebugValue } from 'react';

export default function UseOnlineStatus() {
  const [isOnline, setOnline] = useState(true);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}
