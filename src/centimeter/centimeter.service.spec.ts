import { Test, TestingModule } from '@nestjs/testing';
import { CentimeterService } from './centimeter.service';

describe('CentimeterService', () => {
  let service: CentimeterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentimeterService],
    }).compile();

    service = module.get<CentimeterService>(CentimeterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
