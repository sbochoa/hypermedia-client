export default function(links, parentLinks) {
  let update = links.filter(link => link.rel == 'update')[0]

  if (!update) {
    update = parentLinks && parentLinks.update
  }

  let submit = links.filter(link => link.rel == 'submit')[0]

  if (!submit) {
    submit = parentLinks && parentLinks.submit
  }

  return {
    actions: links.filter(link => link.rel == 'action'),
    navigate: links.filter(link => link.rel == 'navigate')[0],
    parent: links.filter(link => link.rel == 'parent')[0],
    self: links.filter(link => link.rel == 'self')[0],
    submit,
    update,
  }
}
