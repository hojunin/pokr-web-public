import { Component } from 'react';

interface ComponentErrorBoundaryProps {
  errorMessage?: string;
}

class ComponentErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  }
  render() {
    if (this.state.hasError) {
      // 폴백 UI - 어떤 에러인지, 리트라이 로직을 넣을지.
      return <h1>에러가 발생했어</h1>;
    }
    return this.props.children;
  }
}

export default ComponentErrorBoundary;
