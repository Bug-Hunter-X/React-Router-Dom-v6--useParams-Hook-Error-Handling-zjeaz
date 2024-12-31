In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook.  If you don't handle the potential for `params` to be `undefined` (e.g., when the route hasn't loaded yet or the URL is invalid), it can throw errors.  For instance:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>Details for ID: {id}</h1>  {/* Error if id is undefined */}
    </div>
  );
}
```