const hasImage = (book) => !!(book?.image?.url);

function run(input) {
  const me = input?.data?.me;
  if (!me?.length) return {};

  const eligibleBooks = me[0].want_to_read.filter(item => 
    hasImage(item.book) || hasImage(item.edition)
  );

  const shuffled = [...eligibleBooks].sort(
    () => 0.5 - Math.random()
  ).slice(0, 5);

  input.data.me[0].want_to_read = shuffled;
  return input;
}
