import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import Photo from '../../client/components/Photo';
import comments from '../../client/data/comments';
import posts from '../../client/data/posts';


describe('Photo Component', function () {
  var result;
  before(()=> {
    var renderer = ReactTestUtils.createRenderer();
    
    let props = {
      post : posts[0],
      comments : comments.BAcyDyQwcXX,
      i : 0,
      increment: expect.createSpy()
    };

    renderer.render(<Photo {...props} />)
    result = renderer.getRenderOutput();
  });

  it('should return a figure element',()=>{
    expect(result.type).toEqual('figure');
  });
})



