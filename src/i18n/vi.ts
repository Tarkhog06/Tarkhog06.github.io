import type { Dictionary } from './dictionary';

const vi: Dictionary = {
  nav: {
    about: 'Giới thiệu',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    skills: 'Kỹ năng',
    contact: 'Liên hệ',
    contactCta: 'Liên hệ',
  },

  hero: {
    statusPill: 'Kỹ sư Mạng & Bảo mật @ KPMG Luxembourg',
    role: 'Kỹ sư Công nghệ Thông tin',
    specialties: ['An ninh mạng', 'Mạng máy tính', 'Điện toán đám mây', 'Phát triển phần mềm'],
    tagline:
      'Kỹ sư Công nghệ Thông tin đam mê an ninh mạng, hệ thống mạng và công nghệ hiện đại. Luôn tò mò, luôn học hỏi và luôn tìm kiếm thử thách kỹ thuật tiếp theo.',
    viewProjects: 'Xem dự án',
    downloadResume: 'Tải CV',
  },

  about: {
    eyebrow: 'Giới thiệu',
    headingPrefix: 'Kỹ sư ở giao điểm giữa',
    headingHighlight: 'bảo mật, mạng máy tính & phát triển phần mềm',
    paragraph:
      'Tôi là Kỹ sư Công nghệ Thông tin, chuyên về an ninh mạng, hệ thống mạng và phát triển phần mềm. Tôi thích thiết kế hạ tầng bảo mật, tự động hóa triển khai và xây dựng các ứng dụng đáng tin cậy.',
    factLabels: {
      education: 'Học vấn',
      focus: 'Chuyên môn',
      languages: 'Ngôn ngữ',
    },
    factValues: {
      education:
        'Thạc sĩ Công nghệ Thông tin — An ninh mạng, Mạng máy tính & Phát triển Phần mềm, ESIEE Paris',
      focus: 'Hạ tầng bảo mật, hệ thống mạng, backend & tự động hóa',
      languages: 'Tiếng Pháp (thành thạo) · Tiếng Anh (chuyên nghiệp) · Tiếng Việt (thành thạo)',
    },
  },

  terminal: {
    whoami: 'Daniel Nguyen — Kỹ sư Công nghệ Thông tin',
    specializationHeader: 'cat specialization.txt',
    specializationLine1: '• An ninh mạng    • Mạng máy tính',
    specializationLine2: '• Backend         • Frontend',
    projectsHeader: 'ls ~/projects',
    statusHeader: 'echo $STATUS',
    status: 'Sẵn sàng cho các vị trí bảo mật',
  },

  experience: {
    eyebrow: 'Kinh nghiệm',
    title: 'Nơi tôi đã làm việc',
    description:
      'Từ triển khai tại phòng thí nghiệm y tế đến phát triển phần mềm doanh nghiệp và bảo mật mạng.',
    items: {
      kpmg: {
        role: 'Kỹ sư Mạng & Bảo mật',
        description:
          'Cải thiện và bảo mật hạ tầng mạng nội bộ, quản lý quyền truy cập đặc quyền trên các thiết bị mạng (Cisco, Indeni/Idira).',
      },
      bouygues: {
        role: 'Kỹ sư Phần mềm',
        description:
          'Thiết kế, phát triển, kiểm thử và triển khai ứng dụng lên môi trường production, phối hợp chặt chẽ với các bên liên quan để đáp ứng yêu cầu nghiệp vụ và kỹ thuật.',
      },
      eurofins: {
        role: 'Trợ lý Quản lý Dự án',
        description:
          'Tối ưu hóa quản lý nhiệt độ cho 300 cảm biến — hỗ trợ lắp đặt, đào tạo, kiểm định và chuyển đổi hệ thống tại một phòng thí nghiệm y tế.',
      },
    },
  },

  projects: {
    eyebrow: 'Dự án',
    title: 'Dự án tiêu biểu',
    description:
      'Sự kết hợp giữa hạ tầng tự lưu trữ, nền tảng đám mây và lập trình hệ thống. Home Lab có một bài viết nghiên cứu chi tiết riêng.',
    caseStudy: 'Xem chi tiết',
    code: 'Mã nguồn',
    private: 'Riêng tư',
    items: {
      'home-lab': {
        subtitle: 'Hạ tầng tự lưu trữ trên Proxmox',
        category: 'Hạ tầng',
        description:
          'Một homelab theo chuẩn production: hypervisor Proxmox được phân chia thành các VM chuyên biệt cho reverse-proxy / VPN gateway, dịch vụ chạy container, sao lưu và giám sát toàn diện, được đưa ra internet an toàn qua Cloudflare Tunnel.',
      },
      tenexa: {
        subtitle: 'Nền tảng quản lý đa đám mây',
        category: 'Backend • Cloud',
        description:
          'Một nền tảng quản lý đám mây đa nhà cung cấp (AWS, GCP & Horizon) để cấp phát và quản lý vòng đời VM, cụm Kubernetes, ổ đĩa lưu trữ và kế hoạch sao lưu, với điều phối luồng công việc theo sự kiện và giám sát tài nguyên theo thời gian thực.',
      },
      'chat-stream': {
        subtitle: 'Ứng dụng nhắn tin TCP/UDP tự xây dựng',
        category: 'Lập trình mạng',
        description:
          'Ứng dụng nhắn tin client-server thời gian thực, tự triển khai TCP/UDP từ đầu: chat công khai, nhắn tin riêng tư và truyền file trực tiếp peer-to-peer với xác thực mật khẩu tùy chọn, dựa trên một RFC tự định nghĩa giao thức.',
      },
      'class-gen': {
        subtitle: 'Sinh mã Java bằng LLM chạy cục bộ',
        category: 'LLM • Full-stack',
        description:
          'Công cụ full-stack sử dụng LLM chạy cục bộ để sinh, biên dịch và tự động sửa lỗi các lớp Java từ mô tả bằng ngôn ngữ tự nhiên: bảo mật dữ liệu tuyệt đối, không gọi API bên ngoài, điều phối bằng Langchain4J.',
      },
    },
  },

  skills: {
    eyebrow: 'Kỹ năng',
    title: 'Công cụ & công nghệ',
    description: 'Bộ công nghệ tôi sử dụng trong bảo mật, mạng máy tính và phát triển phần mềm.',
    groupTitles: {
      cybersecurity: 'An ninh mạng',
      networking: 'Mạng máy tính',
      languages: 'Ngôn ngữ lập trình',
      frameworks: 'Framework',
      infra: 'Hạ tầng & DevOps',
      data: 'Dữ liệu & Giám sát',
    },
  },

  certifications: {
    eyebrow: 'Chứng chỉ',
    title: 'Đang chuẩn bị',
    description: 'Chính thức hóa kinh nghiệm thực tế bằng các chứng chỉ ngành — lộ trình bên dưới.',
    status: {
      preparing: 'Đang chuẩn bị',
      planned: 'Dự kiến',
    },
  },

  contact: {
    eyebrow: 'Liên hệ',
    headingPrefix: 'Cùng xây dựng điều gì đó',
    headingHighlight: 'an toàn & đáng tin cậy',
    paragraph:
      'Sẵn sàng cho các cơ hội trong lĩnh vực an ninh mạng, hệ thống mạng và kỹ thuật hạ tầng. Cách nhanh nhất để liên hệ với tôi là qua email.',
    getInTouch: 'Liên hệ ngay',
    downloadResume: 'Tải CV',
    methodLabels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },

  footer: {
    builtWith: 'Xây dựng với Next.js, Tailwind CSS & Framer Motion',
  },

  languageSwitcher: {
    label: 'Đổi ngôn ngữ',
  },

  homelab: {
    backToPortfolio: 'Về trang chủ',
    breadcrumb: 'projects / home-lab',
    badge: 'Hạ tầng · Tự lưu trữ',
    lede: 'Một hạ tầng tự lưu trữ theo chuẩn production trên Proxmox: các VM được phân đoạn, không mở cổng nào ra ngoài, dịch vụ chạy container, bảo mật nhiều lớp, giám sát toàn diện và chiến lược sao lưu 3-2-1 đã được kiểm chứng.',
    statLabels: {
      hypervisor: 'Hypervisor',
      services: 'Dịch vụ',
      publicPorts: 'Cổng công khai',
      backups: 'Sao lưu',
    },
    overview: {
      eyebrow: 'Tổng quan',
      title: 'Mục tiêu',
      body1:
        'Đối xử với một máy chủ cá nhân như hạ tầng thực thụ. Đây là môi trường thực hành cho những kỹ năng tôi tâm huyết trong công việc: bảo mật mạng, reverse proxy, quản lý bí mật (secrets), điều phối container, giám sát hệ thống và khôi phục sau sự cố — tất cả trên một máy chủ Proxmox duy nhất mà không bao giờ để lộ trực tiếp ra internet.',
      body2:
        'Proxmox chạy trên ZFS để tạo snapshot và đảm bảo toàn vẹn dữ liệu. Các khối lượng công việc được tách thành các VM chuyên biệt để một sự cố hay cấu hình sai ở một nơi không lan sang chỗ khác. Đường duy nhất từ bên ngoài vào là một Cloudflare Tunnel đi ra (outbound), được bảo vệ bởi Traefik. Router không có bất kỳ port-forward nào từ bên ngoài vào.',
      glanceTitle: 'Tổng quan nhanh',
      glanceItems: [
        'Một máy chủ Proxmox VE duy nhất, chạy trên ZFS',
        '5 VM được phân đoạn, thiết kế theo mục đích riêng',
        'WireGuard cho truy cập quản trị từ xa',
        'Không cổng nào mở vào qua CF Tunnel',
        'Giám sát bằng Prometheus + Grafana',
      ],
    },
    architecture: {
      eyebrow: 'Kiến trúc',
      title: 'Luồng lưu lượng đi như thế nào',
      body: 'Mọi yêu cầu công khai đều đi qua cùng một lộ trình được bảo vệ. Không dịch vụ nào có thể truy cập được nếu chưa qua tunnel, giải mã TLS và đăng nhập một lần (SSO).',
    },
    compute: {
      eyebrow: 'Tính toán',
      title: 'Kiến trúc các VM',
      body: 'Trách nhiệm được tách ra trên năm VM để giảm phạm vi ảnh hưởng khi có sự cố; mỗi VM có thể được điều chỉnh kích thước, sao lưu và dựng lại một cách độc lập.',
      roles: {
        gateway: 'Gateway reverse-proxy & VPN',
        services: 'Máy chủ ứng dụng Docker',
        'k3s-node': 'Lab Kubernetes',
        monitoring: 'Hệ thống giám sát',
        storage: 'Sao lưu & chia sẻ file',
      },
    },
    security: {
      eyebrow: 'Bảo mật',
      title: 'Phòng thủ theo chiều sâu',
      body: 'Không một biện pháp kiểm soát nào được tin tưởng một mình. Mỗi lớp đều giả định rằng lớp trước có thể bị vượt qua.',
      items: [
        {
          title: 'Không cổng nào bị lộ',
          desc: 'Lưu lượng công khai chỉ đi qua một Cloudflare Tunnel đi ra ngoài. Tường lửa không có port-forward nào để bị tấn công.',
        },
        {
          title: 'SSO + xác thực hai lớp',
          desc: 'Authelia bắt buộc đăng nhập một lần (SSO) và mã TOTP hai lớp trước mọi dịch vụ nhạy cảm.',
        },
        {
          title: 'TLS ở khắp mọi nơi',
          desc: "Traefik tự động cấp và gia hạn chứng chỉ Let's Encrypt; toàn bộ lưu lượng HTTP được chuyển hướng sang HTTPS.",
        },
        {
          title: 'Chống dò mật khẩu (brute-force)',
          desc: 'Fail2Ban phân tích nhật ký xác thực và proxy để tự động chặn các IP có hành vi bất thường.',
        },
        {
          title: 'Quản lý bí mật (secrets)',
          desc: 'Vault lưu trữ thông tin xác thực dịch vụ và token API. Không có gì được viết cứng trong các file compose.',
        },
        {
          title: 'Phân đoạn mạng',
          desc: 'Các VLAN tách biệt lưu lượng quản trị, dịch vụ và không tin cậy, theo nguyên tắc đặc quyền tối thiểu trên tường lửa.',
        },
      ],
    },
    networking: {
      wireguardTitle: 'Truy cập từ xa — WireGuard',
      wireguardBody:
        'Truy cập quản trị không bao giờ đi qua giao diện web công khai. Một tunnel WireGuard cung cấp VPN nhanh, hiện đại vào VLAN quản trị, giúp SSH và Proxmox chỉ có thể truy cập bởi các thiết bị đã xác thực — không bao giờ lộ ra internet.',
      vlanTitle: 'Phân đoạn — VLAN',
      vlanBody:
        'Lưu lượng được tách thành các phân đoạn quản trị, dịch vụ và không tin cậy. Quy tắc tường lửa tuân theo nguyên tắc đặc quyền tối thiểu. VLAN dịch vụ có thể truy cập cơ sở dữ liệu của nó, nhưng phân đoạn không tin cậy hầu như không thể truy cập gì.',
    },
    monitoring: {
      eyebrow: 'Giám sát',
      title: 'Giám sát & cảnh báo',
      body: 'Prometheus thu thập dữ liệu từ các exporter trên máy chủ và container; Grafana biến dữ liệu đó thành dashboard và cảnh báo.',
      items: [
        'node_exporter — CPU, RAM, ổ đĩa & mạng của máy chủ',
        'cAdvisor — mức sử dụng tài nguyên theo từng container',
        'Prometheus — thu thập, lưu trữ & quy tắc cảnh báo',
        'Grafana — dashboard cho hạ tầng, container & dịch vụ',
        'Cảnh báo dựa trên ngưỡng tài nguyên và thời gian hoạt động',
      ],
      illustrative: 'minh họa',
      metricLabels: {
        cpuLoad: 'Tải CPU',
        memory: 'Bộ nhớ',
        containers: 'Container',
        uptime: 'Thời gian hoạt động',
      },
    },
    backup: {
      eyebrow: 'Khả năng phục hồi',
      title: 'Chiến lược sao lưu — 3-2-1',
      body: 'Ba bản sao dữ liệu, trên hai loại phương tiện lưu trữ, với một bản sao ở nơi khác.',
      tiers: [
        {
          tier: 'Snapshot',
          freq: 'Hằng giờ / Hằng ngày',
          desc: 'Snapshot ZFS cho phép khôi phục cục bộ tức thì, chi phí thấp và bảo vệ khỏi việc xóa nhầm.',
        },
        {
          tier: 'Sao lưu cục bộ',
          freq: 'Hằng ngày',
          desc: 'Restic ghi các bản sao lưu đã khử trùng lặp và mã hóa vào một dataset riêng trên pool lưu trữ.',
        },
        {
          tier: 'Bản sao ngoài site',
          freq: 'Hằng tuần',
          desc: 'Một bản sao Restic / Duplicati đã mã hóa được nhân bản ra nơi khác — con số "1" trong quy tắc 3-2-1.',
        },
      ],
    },
    challenges: {
      eyebrow: 'Kỹ thuật',
      title: 'Thách thức & đánh đổi',
      challengeLabel: 'Thách thức',
      solutionLabel: 'Giải pháp',
      items: [
        {
          problem: 'Đưa dịch vụ ra công khai mà không cần mở cổng trên tường lửa',
          solution:
            'Một Cloudflare Tunnel duy trì kết nối đi ra ngoài duy nhất tới edge; kết hợp với SSO của Authelia, không có gì trong mạng LAN có thể truy cập trực tiếp từ internet.',
        },
        {
          problem: 'Định cỡ VM hợp lý trên phần cứng hạn chế',
          solution:
            'Phân tích khối lượng công việc thực tế bằng hệ thống giám sát, sau đó điều chỉnh vCPU/RAM cho từng VM và gộp các dịch vụ nhẹ vào chung một máy chủ Docker.',
        },
        {
          problem: 'Chi phí quản lý chứng chỉ',
          solution:
            'Giao việc cấp và gia hạn ACME cho Traefik để mỗi dịch vụ đều có chứng chỉ TLS hợp lệ, tự động gia hạn mà không cần thao tác thủ công.',
        },
        {
          problem: 'Sao lưu đáng tin cậy và có thể khôi phục',
          solution:
            'Áp dụng chiến lược 3-2-1 với snapshot ZFS và Restic mã hóa, đồng thời kiểm tra khôi phục định kỳ thay vì mặc định rằng bản sao lưu luôn hoạt động.',
        },
      ],
    },
    learnings: {
      eyebrow: 'Bài học',
      title: 'Những gì tôi đã học được',
      items: [
        'Phòng thủ theo chiều sâu là một tư duy. Mỗi lớp (mạng, proxy, xác thực, bí mật) đều giả định lớp trước có thể thất bại.',
        'Khả năng tái tạo quan trọng hơn các mẹo vặt giữ uptime: Docker Compose khai báo rõ ràng và cấu hình được ghi chép đầy đủ giúp việc dựng lại trở nên đơn giản.',
        'Không thể bảo mật hay tối ưu thứ mà mình không nhìn thấy. Khả năng giám sát phải có trước khi mở rộng bất cứ điều gì.',
        'Một bản sao lưu chỉ thực sự đáng tin khi việc khôi phục từ nó đã được kiểm chứng toàn diện.',
      ],
    },
    stack: {
      eyebrow: 'Công nghệ',
      title: 'Công nghệ đã sử dụng',
    },
    cta: {
      title: 'Muốn tìm hiểu sâu hơn?',
      body: 'Rất sẵn lòng trao đổi chi tiết về cấu hình, mô hình đe dọa hoặc các quyết định thiết kế.',
      getInTouch: 'Liên hệ ngay',
      allProjects: 'Tất cả dự án',
    },
  },
};

export default vi;
