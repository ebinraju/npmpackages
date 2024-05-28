import { useState } from 'react';
import { Button } from '../../components/button/index.jsx';
import { Modal } from '../../components/modal/index.jsx';

export default {
  component: Modal,
  title: 'Modal',
  argTypes: {
    title: 'RTM Cabot',
  }
};

export const Default = {
  args: {
    title: 'RTM Cabot'
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Show modal
        </Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={{ width: '100%', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            This is content
          </div>
        </Modal>
      </>
    );
  }
};

export const ReactNodeAsTitle = {
  args: {
  },
  parameters: {
    docs: {
      source: { language: 'jsx' },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Show modal
        </Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onClickOutside={() => setOpen(false)}
          title={(
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 24, height: 24, background: '#cecece', borderRadius: 999 }} />
              RTM Cabot
            </div>
          )}
        >
          <div style={{ width: '100%', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            This is content
          </div>
        </Modal>
      </>
    );
  }
}
