import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  const service = new GreetingService();

  it('#getGreeting returns a `greeting`', done => {
    service.getGreeting().then((res) => {
      expect(res).toBe('Hello');
      done();
    });
  });

  it('#getSubject returns current `subject`', done => {
    service.subject = {name: 'infinity'};
    service.getSubject().then((res) => {
      expect(res).toBe('infinity');
      done();
    });
  });

  it('#getPunctuation returns `punctuation`', done => {
    service.getPunctuation().then((res) => {
      expect(res).toBe('!');
      done();
    });
  });
});
