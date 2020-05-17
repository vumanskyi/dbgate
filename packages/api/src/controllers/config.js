module.exports = {
  get_meta: 'get',
  async get() {
    const toolbarButtons = process.env.TOOLBAR;
    const toolbar = toolbarButtons
      ? toolbarButtons.split(',').map((name) => ({
          name,
          icon: process.env[`ICON_${name}`],
          title: process.env[`TITLE_${name}`],
          page: process.env[`PAGE_${name}`],
        }))
      : null;
    return {
      runAsPortal: !!process.env.CONNECTIONS,
      toolbar,
    };
  },
};
