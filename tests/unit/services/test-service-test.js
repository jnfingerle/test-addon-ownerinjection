import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';
import Service from 'test-addon/services/test-service';

module('Unit | Service | test-service', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('default', function(assert) {
    let service = this.owner.lookup('service:test-service');
    assert.ok(service);
  });

  test('create', function(assert) {
    let service = Service.create();
    assert.ok(service);
  });

  test('create with owner (Error)', function(assert) {
    let service = Service.create(this.owner.ownerInjection());
    assert.ok(service);
  });
});
