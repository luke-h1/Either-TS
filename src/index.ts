interface Left<A> {
  readonly tag: 'Left';
  readonly value: A;
}

interface Right<B> {
  readonly tag: 'Right';
  readonly value: B;
}

type Either<A, B> = Left<A> | Right<B>;

function isLeft<A>(value: unknown): value is Left<A> {
  if ((value as Left<A>).tag === 'Left') {
    return true;
  }

  return false;
}

function isRight<B>(value: unknown): value is Right<B> {
  if ((value as Right<B>).tag === 'Right') {
    return true;
  }

  return false;
}

function left<A>(value: A): Left<A> {
  return {
    tag: 'Left',
    value,
  };
}

function right<B>(value: B): Right<B> {
  return {
    tag: 'Right',
    value,
  };
}

type EitherAsync<A, B> = Promise<Either<A, B>>;
