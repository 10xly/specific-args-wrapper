declare function specificArgsWrapper<T extends (...args: any[]) => any>(
  fn: T,
  args: any[]
): (...args: any[]) => ReturnType<T>

export = specificArgsWrapper