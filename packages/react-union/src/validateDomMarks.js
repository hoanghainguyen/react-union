import forEach from 'ramda/src/forEach';
import { invariant } from './utils';

export default forEach(({ name, namespace, container }) => {
	invariant(name, "Missing 'name' in DOM mark.");
	invariant(
		namespace || container,
		`Missing required attributes for the widget "${name}". ` +
			'Fill in "namespace" or "container" in the DOM mark.'
	);
});